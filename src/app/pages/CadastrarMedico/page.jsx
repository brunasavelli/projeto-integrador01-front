"use client";

import styles from "./CadastrarMedico.module.css";
import { useState } from "react";

const steps = ["Dados pessoais", "Endereço", "Dados clínicos", "Confirmar"];

export default function CadastrarMedico() {
    const [stepAtual, setStepAtual] = useState(0);
    const [sexo, setSexo] = useState("");
    const [form, setForm] = useState({
        nome: "", especialidade: "", crm: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let v = value;

        setForm(prev => ({ ...prev, [name]: v }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <h2>Cadastro de Médico</h2>
                </div>

                <div className={styles.form}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Dados</h3>
                        </div>

                        <div className={styles.grid}>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>Nome completo: <span className={styles.req}>*</span></label>
                                <input name="nome" value={form.nome} onChange={handleChange} placeholder="Ex: Dr. Fábio Silva" />
                            </div>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>Especialidade: <span className={styles.req}>*</span></label>
                                <input name="especialidade" value={form.especialidade} onChange={handleChange} placeholder="Ex: Cardiologista" />
                            </div>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>CRM: <span className={styles.req}>*</span></label>
                                <input name="crm" value={form.crm} onChange={handleChange} placeholder="Ex: 123456/SP" />
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <button className={styles.btnNext} onClick={() => setStepAtual(s => Math.min(s + 1, steps.length - 1))}>
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}