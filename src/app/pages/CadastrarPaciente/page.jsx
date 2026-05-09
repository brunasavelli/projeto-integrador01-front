"use client";

import styls from "./CadastrarPaciente.module.css";
import Header from "@/components/Header/page.jsx";

export default function CadastrarPaciente() {
    return (
        <div className={styls.container}>
            <Header />
            <div className="content">
                <h1>Tela para cadastrar Paciente</h1>
            </div>
        </div>
    )
}