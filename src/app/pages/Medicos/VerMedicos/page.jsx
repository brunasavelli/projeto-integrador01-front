'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './VerMedicos.module.css';

export default function VerMedicos() {
    const router = useRouter();

  // Dados fictícios de exemplo
    const [medicos, setMedicos] = useState([
        {
            id: 1,
            nome: 'Dr. Carlos Silva',
            crm: '123456/SP',
            especialidade: 'Cardiologia',
            email: 'carlos@hospital.com',
            telefone: '(11) 98765-4321',
            dataAdmissao: '2020-01-15',
            status: 'Ativo',
        },
        {
            id: 2,
            nome: 'Dra. Ana Santos',
            crm: '654321/SP',
            especialidade: 'Pneumologia',
            email: 'ana@hospital.com',
            telefone: '(11) 99876-5432',
            dataAdmissao: '2019-03-22',
            status: 'Ativo',
        },
        {
            id: 3,
            nome: 'Dr. Felipe Oliveira',
            crm: '789456/SP',
            especialidade: 'Neurocirurgia',
            email: 'felipe@hospital.com',
            telefone: '(11) 97654-3210',
            dataAdmissao: '2021-07-10',
            status: 'Inativo',
        },
    ]);

    const [filtro, setFiltro] = useState('');

  // Filtrar médicos por nome, CRM ou especialidade
    const medicosFiltrados = medicos.filter((medico) =>
        medico.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        medico.crm.includes(filtro) ||
        medico.especialidade.toLowerCase().includes(filtro.toLowerCase())
    );

    const handleNovoMedico = () => {
        router.push('/pages/Medicos/CadastrarMedico');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Médicos</h1>
                <button
                    className={styles.btnNovo}
                    onClick={handleNovoMedico}
                >
                    + Novo Médico
                </button>
            </div>

            <div className={styles.filtroSection}>
                <input
                    type="text"
                    placeholder="Buscar por nome, CRM ou especialidade..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className={styles.inputFiltro}
                />
                <span className={styles.totalMedicos}>
                    {medicosFiltrados.length} médico(s)
                </span>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Especialidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {medicosFiltrados.length > 0 ? (
                            medicosFiltrados.map((medico) => (
                                <tr key={medico.id} className={styles.tableRow}>
                                    <td>{medico.nome}</td>
                                    <td>{medico.especialidade}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className={styles.semDados}>
                                Nenhum médico encontrado
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
