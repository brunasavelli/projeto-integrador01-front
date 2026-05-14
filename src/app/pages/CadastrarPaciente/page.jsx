"use client";

import styles from "./CadastrarPaciente.module.css";
import Header from "@/components/Header/page.jsx";
import { useState } from "react";

const steps = ["Dados pessoais", "Endereço", "Dados clínicos", "Confirmar"];

export default function CadastrarPaciente() {
    const [stepAtual, setStepAtual] = useState(0);
    const [sexo, setSexo] = useState("");
    const [form, setForm] = useState({
        nome: "", cpf: "", rg: "", nascimento: "",
        telefone: "", email: "", sexo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let v = value;

        if (name === "cpf") {
            v = value.replace(/\D/g, "")
            if (v.length <= 3) v = v
            else if (v.length <= 6) v = v.slice(0,3)+"."+v.slice(3)
            else if (v.length <= 9) v = v.slice(0,3)+"."+v.slice(3,6)+"."+v.slice(6)
            else v = v.slice(0,3)+"."+v.slice(3,6)+"."+v.slice(6,9)+"-"+v.slice(9,11)
        }

        if (name === "telefone") {
            v = value.replace(/\D/g, "")
            if (v.length <= 2) v = "("+v
            else if (v.length <= 7) v = "("+v.slice(0,2)+") "+v.slice(2)
            else v = "("+v.slice(0,2)+") "+v.slice(2,7)+"-"+v.slice(7,11)
        }

        setForm(prev => ({ ...prev, [name]: v }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <h2>Cadastro de Paciente</h2>
                </div>

                <div className={styles.form}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Dados pessoais</h3>
                        </div>

                        <div className={styles.grid}>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>Nome completo: <span className={styles.req}>*</span></label>
                                <input name="nome" value={form.nome} onChange={handleChange} placeholder="Ex: Maria da Silva Souza" />
                            </div>

                            <div className={styles.field}>
                                <label>CPF: <span className={styles.req}>*</span></label>
                                <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="000.000.000-00" maxLength={14} />
                            </div>

                            <div className={styles.field}>
                                <label>RG: </label>
                                <input name="rg" value={form.rg} onChange={handleChange} placeholder="00.000.000-0" />
                            </div>

                            <div className={styles.field}>
                                <label>Data de nascimento: <span className={styles.req}>*</span></label>
                                <input name="nascimento" type="date" value={form.nascimento} onChange={handleChange} />
                            </div>

                            <div className={styles.field}>
                                <label>Telefone: <span className={styles.req}>*</span></label>
                                <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(11) 90000-0000" maxLength={15} />
                            </div>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>E-mail: </label>
                                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="exemplo@email.com" />
                            </div>

                            <div className={`${styles.field} ${styles.full}`}>
                                <label>Sexo: <span className={styles.req}>*</span></label>
                                <div className={styles.radioGroup}>
                                    {["Masculino", "Feminino", "Outro"].map(op => (
                                        <button
                                            key={op}
                                            type="button"
                                            onClick={() => setSexo(op)}
                                            className={`${styles.radioBtn} ${sexo === op ? styles.radioBtnSelected : ""}`}
                                        >{op}</button>
                                    ))}
                                </div>
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