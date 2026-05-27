"use client";

import styles from "./Chamados.module.css";
import Link from "next/link";
import { useState } from "react";

const chamadosMock = [
    {
        id: "#001",
        paciente: "João Silva",
        descricao: "Paciente com febre alta",
        data: "13/05/2026",
        status: "Em espera",
        prioridade: "Alta",
    },
    {
        id: "#002",
        paciente: "Maria Santos",
        descricao: "Consulta de rotina",
        data: "13/05/2026",
        status: "Em andamento",
        prioridade: "Baixa",
    },
    {
        id: "#003",
        paciente: "Pedro Costa",
        descricao: "Exame de sangue urgente",
        data: "13/05/2026",
        status: "Em espera",
        prioridade: "Alta",
    },
    {
        id: "#004",
        paciente: "Ana Oliveira",
        descricao: "Atendimento inicial",
        data: "12/05/2026",
        status: "Finalizado",
        prioridade: "Média",
    },
    {
        id: "#005",
        paciente: "Carlos Mendes",
        descricao: "Acompanhamento pós-operatório",
        data: "13/05/2026",
        status: "Em andamento",
        prioridade: "Média",
    },
    {
        id: "#006",
        paciente: "Lucia Ferreira",
        descricao: "Prescrição de medicamentos",
        data: "12/05/2026",
        status: "Finalizado",
        prioridade: "Baixa",
    },
];

export default function Chamados() {
    const [filtro, setFiltro] = useState("Todos");

    const getPriorityOrder = (prioridade) => {
        switch (prioridade) {
            case "Alta":
                return 1;
            case "Média":
                return 2;
            case "Baixa":
                return 3;
            default:
                return 4;
        }
    };

    const chamadosFiltrados = (filtro === "Todos" 
        ? chamadosMock 
        : chamadosMock.filter(c => c.status === filtro)
    ).sort((a, b) => getPriorityOrder(a.prioridade) - getPriorityOrder(b.prioridade));

    const getPriorityColor = (prioridade) => {
        switch (prioridade) {
            case "Alta":
                return "#ff3939";
            case "Média":
                return "#FFA500";
            case "Baixa":
                return "#27AE60";
            default:
                return "#95A5A6";
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Em espera":
                return { background: "#fddd67f3", color: "#856404" };
            case "Em andamento":
                return { background: "#34c040cb", color: "white" };
            case "Finalizado":
                return { background: "#868686", color: "white" };
            default:
                return { background: "#95A5A6", color: "white" };
        }
    };

    return (
        <div className={styles.container}>
                <div className={styles.row}>
                    <button 
                        className={`${styles.select} ${filtro === "Todos" ? styles.active : ""}`}
                        onClick={() => setFiltro("Todos")}
                    >
                        Todos
                    </button>
                    <button 
                        className={`${styles.select} ${filtro === "Em espera" ? styles.active : ""}`}
                        onClick={() => setFiltro("Em espera")}
                    >
                        Em espera
                    </button>
                    <button 
                        className={`${styles.select} ${filtro === "Em andamento" ? styles.active : ""}`}
                        onClick={() => setFiltro("Em andamento")}
                    >
                        Em andamento
                    </button>
                    <button 
                        className={`${styles.select} ${filtro === "Finalizado" ? styles.active : ""}`}
                        onClick={() => setFiltro("Finalizado")}
                    >
                        Finalizados
                    </button>
                    <Link href="/pages/Chamados/IniciarChamado">
                        <button
                            className={styles.select}
                        >
                            Iniciar Chamado
                        </button>
                    </Link>
                </div>
                <div className={styles.main}>
                    {chamadosFiltrados.map((chamado) => (
                        <div key={chamado.id} className={styles.card}>
                            <div className={styles.cardRow}>
                                <p className={styles.chamadoId}>{chamado.id}</p>
                                <p className={styles.priority} style={{ background: getPriorityColor(chamado.prioridade) }}>
                                    {chamado.prioridade}
                                </p>
                            </div>
                            <p className={styles.patienteName}>{chamado.descricao}</p>
                            <div className={styles.description}>
                                <p><strong>Paciente:</strong> {chamado.paciente}</p>
                                <p><strong>Data:</strong> {chamado.data}</p>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.cardRow}>
                                <div className={styles.status} style={getStatusColor(chamado.status)}>
                                    {chamado.status}
                                </div>
                                <button className={styles.btnDetalhes}>Ver detalhes</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}