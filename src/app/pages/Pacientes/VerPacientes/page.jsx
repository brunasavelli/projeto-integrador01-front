'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './VerPacientes.module.css';

export default function VerPacientes() {
  const router = useRouter();
  
  // Dados fictícios de exemplo
    const [pacientes, setPacientes] = useState([
        {
        id: 1,
        nome: 'João Silva',
        cpf: '123.456.789-00',
        email: 'joao@email.com',
        telefone: '(11) 98765-4321',
        dataNascimento: '1990-05-15',
        status: 'Ativo',
        },
        {
        id: 2,
        nome: 'Maria Santos',
        cpf: '987.654.321-00',
        email: 'maria@email.com',
        telefone: '(11) 99876-5432',
        dataNascimento: '1985-03-22',
        status: 'Ativo',
        },
        {
        id: 3,
        nome: 'Pedro Oliveira',
        cpf: '456.789.123-00',
        email: 'pedro@email.com',
        telefone: '(11) 97654-3210',
        dataNascimento: '1992-07-10',
        status: 'Inativo',
        },
    ]);

    const [filtro, setFiltro] = useState('');

  // Filtrar pacientes por nome ou CPF
    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        paciente.cpf.includes(filtro)
    );

    const handleEditar = (id) => {
        console.log('Editar paciente:', id);
        // Implementar navegação para página de edição
    };

    const handleExcluir = (id) => {
        if (confirm('Tem certeza que deseja excluir este paciente?')) {
        setPacientes(pacientes.filter((p) => p.id !== id));
        }
    };

    const handleVisualizar = (id) => {
        console.log('Visualizar paciente:', id);
        // Implementar navegação para página de detalhes
    };

    const handleNovoPaciente = () => {
        router.push('/pages/Pacientes/CadastrarPaciente');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pacientes</h1>
                <button 
                    className={styles.btnNovo}
                    onClick={handleNovoPaciente}
                >
                    + Novo Paciente
                </button>
            </div>

            <div className={styles.filtroSection}>
                <input
                    type="text"
                    placeholder="Buscar por nome ou CPF..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className={styles.inputFiltro}
                />
                <span className={styles.totalPacientes}>
                    {pacientesFiltrados.length} paciente(s) encontrado(s)
                </span>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pacientesFiltrados.length > 0 ? (
                            pacientesFiltrados.map((paciente) => (
                                <tr key={paciente.id} className={styles.tableRow}>
                                <td>{paciente.nome}</td>
                                <td>{paciente.cpf}</td>
                                <td>{paciente.email}</td>
                                <td>{paciente.telefone}</td>
                                <td>
                                    {new Date(paciente.dataNascimento).toLocaleDateString(
                                    'pt-BR'
                                    )}
                                </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className={styles.semDados}>
                                Nenhum paciente encontrado
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
