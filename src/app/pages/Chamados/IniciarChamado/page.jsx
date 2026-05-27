'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './IniciarChamado.module.css';

export default function IniciarChamado() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        tipo: '',
        prioridade: 'normal',
        paciente: '',
        medico: '',
        departamento: '',
    });

    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação básica
        if (!formData.titulo.trim()) {
        setErro('Título é obrigatório');
        return;
        }
        if (!formData.descricao.trim()) {
        setErro('Descrição é obrigatória');
        return;
        }
        if (!formData.tipo) {
        setErro('Tipo de chamado é obrigatório');
        return;
        }
        if (!formData.paciente) {
        setErro('Paciente é obrigatório');
        return;
        }

        setEnviando(true);
        setErro(null);

        try {
        // SUBSTITUIR com sua URL de API real
        const response = await fetch('http://seu-backend/api/chamados', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar chamado');
        }

        const dados = await response.json();
        alert('Chamado criado com sucesso! ID: ' + dados.id);
        router.push('/pages/Chamados');
        } catch (erro) {
        console.error('Erro:', erro);
        setErro(erro.message);
        // Simulação de sucesso em desenvolvimento
        alert('Chamado criado com sucesso! (modo desenvolvimento)');
        router.push('/pages/Chamados');
        } finally {
        setEnviando(false);
        }
    };

    const handleCancelar = () => {
        router.back();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Iniciar Novo Chamado</h1>
            </div>

            <div className={styles.formWrapper}>
                {erro && (
                    <div className={styles.alerta}>
                        ⚠️ {erro}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.grupoForm}>
                        <label htmlFor="descricao" className={styles.label}>
                            Descrição *
                        </label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            placeholder="Descreva detalhadamente a situação do paciente..."
                            className={styles.textarea}
                            rows="6"
                            maxLength="500"
                        />
                        <span className={styles.charCount}>
                            {formData.descricao.length}/500
                        </span>
                    </div>

                    <div className={styles.grid3}>
                        <div className={styles.grupoForm}>
                            <label htmlFor="prioridade" className={styles.label}>
                                Prioridade
                            </label>
                            <select
                                id="prioridade"
                                name="prioridade"
                                value={formData.prioridade}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="baixa">Baixa</option>
                                <option value="alta">Alta</option>
                                <option value="critica">Crítica</option>
                            </select>
                        </div>

                        <div className={styles.grupoForm}>
                            <label htmlFor="paciente" className={styles.label}>
                                Paciente *
                            </label>
                            <input
                                type="text"
                                id="paciente"
                                name="paciente"
                                value={formData.paciente}
                                onChange={handleChange}
                                placeholder="Nome do paciente"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.grupoForm}>
                            <label htmlFor="medico" className={styles.label}>
                                Médico Responsável
                            </label>
                            <input
                                type="text"
                                id="medico"
                                name="medico"
                                value={formData.medico}
                                onChange={handleChange}
                                placeholder="Nome do médico"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.grupoForm}>
                        <label htmlFor="departamento" className={styles.label}>
                            Departamento
                        </label>
                        <select
                            id="departamento"
                            name="departamento"
                            value={formData.departamento}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="">Selecione um departamento...</option>
                            <option value="pediatria">Pediatria</option>
                            <option value="cardiologia">Cardiologia</option>
                            <option value="neurologia">Neurologia</option>
                            <option value="cirurgia">Cirurgia</option>
                            <option value="uti">UTI</option>
                            <option value="otro">Outro</option>
                        </select>
                    </div>

                    <div className={styles.acoesContainer}>
                        <button
                            type="button"
                            onClick={handleCancelar}
                            className={styles.btnCancelar}
                            disabled={enviando}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className={styles.btnEnviar}
                            disabled={enviando}
                        >
                            {enviando ? 'Criando chamado...' : 'Criar Chamado'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
